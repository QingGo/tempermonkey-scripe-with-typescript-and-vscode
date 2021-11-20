package main

import "github.com/gin-gonic/gin"

var gName string = "eki"

type changeNameRequest struct {
	Name string `json:"name"`
}

func changeName(c *gin.Context) {
	var request changeNameRequest
	err := c.BindJSON(&request)
	if err != nil {
		c.JSON(400, gin.H{
			"message": "bad request",
		})
		return
	}
	gName = request.Name
	c.JSON(200, gin.H{
		"message": "ok",
	})
}

func main() {
	r := gin.Default()
	r.GET("/hello", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "hello " + gName,
		})
	})
	r.POST("/change_name", changeName)
	r.RunTLS(":8080", "./mytestserver.crt", "./mytestserver.key")
}
