function getNeighbors(row, col, matrix) {
  let neighbors = []


  // Check top
  if(matrix[row - 1] && matrix[row - 1][col] === 1){
    neighbors.push([row - 1, col])
  }

  // Check top right
  if(matrix[row - 1]){
    if(matrix[row-1][col+1] && matrix[row-1][col + 1] === 1){
      neighbors.push([row-1, col + 1])
    }
  }

  // Check right
  if(matrix[row][col+1] && matrix[row][col + 1] === 1){
    neighbors.push([row, col + 1])
  }

  // Check bottom right
  if(matrix[row + 1]){
    if(matrix[row+1][col+1] && matrix[row+1][col + 1] === 1){
      neighbors.push([row+1, col + 1])
    }
  }

  // Check bottom
  if(matrix[row + 1] && matrix[row + 1][col] === 1){
    neighbors.push([row + 1, col])
  }
  // Check bottom left
  if(matrix[row + 1]){
    if(matrix[row+1][col-1] && matrix[row +1][col - 1] === 1){
      neighbors.push([row+1, col - 1])
    }
  }

  // Check left
  if(matrix[row][col-1] && matrix[row][col - 1] === 1){
    neighbors.push([row, col - 1])
  }
  // Check top left
  if(matrix[row - 1]){
    if(matrix[row-1][col-1] && matrix[row-1][col - 1] === 1){
      neighbors.push([row-1, col - 1])
    }
  }

  // Return neighbors
  return neighbors

  // Your code here
}

function countIslands(matrix) {

  // Create a visited set to store visited nodes
  let visited = new Set()

  // Initialize count to 0
  let count = 0

  // Iterate through all indices in matrix
  for(let r = 0; r < matrix.length; r++){
    for(c = 0; c < matrix[r].length; c++){
      let index = [r,c]
      let stringified = index.toString()

      // If an index contains a 1 and has not been visited,
      // increment island count and start traversing neighbors
      if(!visited.has(stringified) && matrix[r][c] === 1){

        // DO THE THING (increment island count by 1)
        count++;

        // Initialize a stack with current index
        let stack = [index]

        // Add stringified version of current index to the visited set
        visited.add(stringified)

        // While stack contains elements
        while(stack.length > 0){
          // Pop element from stack
          let currentNode = stack.pop()
          let row = currentNode[0]
          let col = currentNode[1]

          // Get valid neighbors of current element
          let neighbors = getNeighbors(row, col, matrix)
          // Iterate over neigbors
          for(let i = 0; i < neighbors.length; i++){
            let value = neighbors[i]
            stringified = value.toString()

            // If neighbor has not been visited
            if(!visited.has(stringified)){

              // Add neighbor to stack
              stack.push(value)

              // Mark neighbor as visited
              visited.add(stringified)
            }
          }
        }
      }
    }
  }
  // Return island count
  return count
}

// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];
