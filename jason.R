library(jsonlite)

list <- vector(mode="list")
list[[1]] <- c(1,2,3,4,5)
list[[2]] <- c(2,4,6,8,10)

exportJson <- toJSON(list)
write(exportJson, "output.json")