library(readr)

rotate <- function(direction, value, current, result) {
  for (i in 1:value) {
    if (direction == "L") {
      current <- current - 1
    } else {
      current <- current + 1
    }
    current <- current %% 100
    if (current == 0) {
      result <- result + 1
    }
  }
  
  return (c(current, result))
}

input <- read_lines("input.txt")
current <- 50
result <- 0

for (line in input) {
  direction <- line |> substring(1, 1)
  value <- line |> substring(2) |> as.numeric()
  output <- rotate(direction, value, current, result)
  current <- output[1]
  result <- output[2]
}

print(result)