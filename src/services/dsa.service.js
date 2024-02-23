export default class DsaService {
  bubbleSort = (data) => {
    // Sample: data = [5, 1, 4, 3, 2], Expect: [1, 2, 3, 4, 5]

    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data.length; j++) {
        // Switch position
        if (data[i] < data[j]) {
          let temp = data[i];
          data[i] = data[j];
          data[j] = temp;
        }
      }
    }

    return data;
  };

  quickSort = (data) => {
    // Sample: data = [5, 1, 4, 3, 2], Expect: [1, 2, 3, 4, 5]
    if (data.length <= 1) return data;

    const pivot = data[0];
    const leftArray = [];
    const rightArray = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i] < pivot) {
        leftArray.push(data[i]);
      } else if (data[i] > pivot) {
        rightArray.push(data[i]);
      }
    }

    return [...this.quickSort(leftArray), pivot, ...this.quickSort(rightArray)];
  };

  linearSearch = (data, search) => {
    // Sample: data = [5, 1, 4, 3, 2], Expect: [1, 2, 3, 4, 5]
    for (const datum of data) {
      if (search === datum) {
        return true;
      }
    }

    return false;
  };

  binarySearch(data, search, start, end) {
    if (start > end) return false;

    const median = Math.floor((start + end) / 2);

    if (data[median] === search) return true;

    if (data[median] > search) {
      return binarySearch(data, search, start, median - 1);
    } else {
      return binarySearch(data, search, median + 1, end);
    }
  }
}
