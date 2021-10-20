

const rates = [
    [1, 0.23, 0.25, 16.43, 18.21, 4.94],
    [4.34, 1, 1.11, 71.40, 79.09, 21.44],
    [3.93, 0.90, 1, 64.52, 71.48, 19.37],
    [0.061, 0.014, 0.015, 1, 1.11, 0.30],
    [0.055, 0.013, 0.014, 0.90, 1, 0.27],
    [0.20, 0.047, 0.052, 3.33, 3.69, 1],
]

const negate_logarithm_convertor = (rates) => {
    const result = new Array(rates.length);
    for(let i  = 0; i < rates.length; i++) {
        
        result[i] = new Array(rates[i].length);

        for(let j = 0; j < rates[0].length; j++) {
            result[i][j] = -1 * Math.log(rates[i][j]);
        }
    }
    return result;
}


const arbitrage = (rates) => {
   
    const transformedGraph = negate_logarithm_convertor(rates);

    let source = 0
    let n = transformedGraph.length;
    let min_dist = new Array(n).fill(10000000000);
    
    pre = new Array(n).fill(-1);
    
    min_dist[source] = source
    for(let i = 0; i < n - 1; i++) {
        for(let source_curr = 0; source_curr < n; source_curr++) {
            for(let dest_curr = 0; dest_curr < n; dest_curr++) {
                if(min_dist[dest_curr] > min_dist[source_curr] + transformedGraph[source_curr][dest_curr]) {
                    min_dist[dest_curr] = min_dist[source_curr] + transformedGraph[source_curr][dest_curr]
                    pre[dest_curr] = source_curr
                    
                }
            }
        }
    }
    for(let source_curr = 0; source_curr < n; source_curr++) {
        for(let dest_curr = 0; dest_curr < n; dest_curr++) {
            if(min_dist[dest_curr] > min_dist[source_curr] + transformedGraph[source_curr][dest_curr]) {
                const resultSet = new Set();
                resultSet.add(dest_curr);
                resultSet.add(source_curr);
                print_cycle = [dest_curr, source_curr]
                
                while(resultSet.has(pre[source_curr]) == false) {
                    print_cycle.push(pre[source_curr])
                    resultSet.add(pre[source_curr]);
                    source_curr = pre[source_curr]
                }
                print_cycle.push(pre[source_curr])
                console.log(print_cycle);
            }
        }
    }
}


arbitrage(rates);