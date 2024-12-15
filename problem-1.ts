{
    const sumArray = (arr: number[]): number => {
        const size = arr.length;
        let sum = 0;
        for (let i = 0; i < size; i++) {
            sum += arr[i];
        }
        return sum;
    }

    const result = sumArray([1, 2, 3, 4, 5]);
    console.log(result);
}
