library(readr)

rotate <- function(direction, value) {
  if (direction == "L") {
    return(-value)
  } else {
    return(value)
  }
}

input <- read_lines("input.txt")
current <- 50
result <- 0

for (line in input) {
  direction <- line |> substring(1, 1)
  value <- line |> substring(2) |> as.numeric()
  current <- current + rotate(direction, value)
  current <- current %% 100
  if (current == 0) {
    result <- result + 1
  }
}

print(result)