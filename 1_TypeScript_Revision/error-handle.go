import (
	"fmt"
	"errors"
)

func HandleError(a, b int) (int, error) {
	if b == 0 {
		return 0, errors.New("denominator cannot be zero")
	}
	return a / b, nil
}

func main() {
	result, err := HandleError(10, 0)
	
	if err != nil {
		fmt.Println("Error:", err)
	} else {
		fmt.Println("Result:", result)
	}
}