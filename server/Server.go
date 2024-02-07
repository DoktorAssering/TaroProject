package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/api/data", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Сервер запущен...")
	})

	http.ListenAndServe(":5050", nil)
}
