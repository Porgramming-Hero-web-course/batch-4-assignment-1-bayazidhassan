{
    function removeDuplicates(arr: number[]): number[] {
        const result: number[] = [];
        const size = arr.length;
        for (let i = 0; i < size; i++) {
            if (!result.includes(arr[i])) {
                result.push(arr[i]);
            }
        }
        return result;
    }
    const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
    console.log(result);
}