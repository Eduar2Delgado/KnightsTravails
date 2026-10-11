function knightMoves(start, end) {
  // La cola guarda objetos con la posición actual y el camino recorrido
  const queue = [{ pos: start, path: [start] }];
  
  // Guardamos las casillas visitadas usando una cadena "x,y"
  const visited = new Set();
  visited.add(start.toString());

  while (queue.length > 0) {
    const { pos, path } = queue.shift();
    const [currentX, currentY] = pos;

    // ¿Llegamos al destino?
    if (currentX === end[0] && currentY === end[1]) {
      console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
      path.forEach(p => console.log(`  [${p[0]}, ${p[1]}]`));
      return path;
    }

    // Probar los 8 movimientos posibles del caballo
    for (const [dx, dy] of MOVES) {
      const nextPos = [currentX + dx, currentY + dy];

      if (isValid(nextPos) && !visited.has(nextPos.toString())) {
        visited.add(nextPos.toString());
        queue.push({
          pos: nextPos,
          path: [...path, nextPos]
        });
      }
    }
  }
}