import React, { useState, useEffect, useRef } from 'react';
import './SortingVisualizerStyles.css';

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [sorting, setSorting] = useState(false);
  const [algorithm, setAlgorithm] = useState('bubble');
  const [iterationCount, setIterationCount] = useState(0);
  const [speed, setSpeed] = useState(50);
  const speedRef = useRef(50);

  const arrayContainerRef = useRef(null);
  const codeContainerRef = useRef(null);

  const arraySize = 50;
  const maxValue = 100;

  const algorithmCodes = {
    bubble: `function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}`,
    selection: `function selectionSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}`,
    insertion: `function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}`,
    quick: `function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start >= end) return;

  let pivotIndex = partition(arr, start, end);
  quickSort(arr, start, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, end);

  return arr;
}

function partition(arr, start, end) {
  const pivot = arr[end];
  let i = start - 1;

  for (let j = start; j < end; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
  return i + 1;
}`,
    merge: `function mergeSort(arr, start = 0, end = arr.length - 1) {
  if (start >= end) return;

  const mid = Math.floor((start + end) / 2);
  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);
  merge(arr, start, mid, end);

  return arr;
}

function merge(arr, start, mid, end) {
  const leftArray = arr.slice(start, mid + 1);
  const rightArray = arr.slice(mid + 1, end + 1);
  let i = 0, j = 0, k = start;

  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] <= rightArray[j]) {
      arr[k] = leftArray[i];
      i++;
    } else {
      arr[k] = rightArray[j];
      j++;
    }
    k++;
  }

  while (i < leftArray.length) {
    arr[k] = leftArray[i];
    i++;
    k++;
  }

  while (j < rightArray.length) {
    arr[k] = rightArray[j];
    j++;
    k++;
  }
}`,
  };

  const algorithmExplanations = {
    bubble: "Bubble Sort repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.",
    selection: "Selection Sort divides the input list into two parts: a sorted portion at the left end and an unsorted portion at the right end. It repeatedly selects the smallest element from the unsorted portion and moves it to the sorted portion.",
    insertion: "Insertion Sort builds the final sorted array one item at a time. It iterates through an input array and removes one element per iteration, finds the place the element belongs in the sorted list and inserts it there.",
    quick: "Quick Sort picks an element as pivot and partitions the given array around the picked pivot. It then recursively sorts the sub-arrays on the left and right of the pivot.",
    merge: "Merge Sort divides the unsorted list into n sublists, each containing one element (a list of one element is considered sorted). Then repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining."
  };

  useEffect(() => {
    generateArray();
  }, []);

  useEffect(() => {
    displayCode(algorithm);
  }, [algorithm]);

  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);

  const generateArray = () => {
    const newArray = Array.from({ length: arraySize }, () => Math.floor(Math.random() * maxValue) + 1);
    setArray(newArray);
    setIterationCount(0);
  };

  const displayCode = (algorithm) => {
    const code = algorithmCodes[algorithm];
    if (codeContainerRef.current) {
      codeContainerRef.current.innerHTML = code.split('\n').map((line, index) =>
        `<span class="code-line" data-line="${index}">${line}</span>`
      ).join('\n');
    }
  };

  const highlightCodeLine = (lineNumber) => {
    const lines = codeContainerRef.current.querySelectorAll('.code-line');
    lines.forEach(line => line.classList.remove('active'));
    const activeLine = codeContainerRef.current.querySelector(`.code-line[data-line="${lineNumber}"]`);
    if (activeLine) {
      activeLine.classList.add('active');

    }
  };

  const updateIterationCount = () => {
    setIterationCount(prev => prev + 1);
  };

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const getDelay = () => {
    // This will give a range from 1ms (fastest) to 500ms (slowest)
    return 500 - (speedRef.current * 4.99);
  };

  const bubbleSort = async () => {
    const n = array.length;
    let newArray = [...array];
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        highlightCodeLine(3);
        const bars = document.getElementsByClassName('array-bar');
        bars[j].classList.add('comparing');
        bars[j + 1].classList.add('comparing-against');
        updateIterationCount();
        if (newArray[j] > newArray[j + 1]) {
          highlightCodeLine(5);
          [newArray[j], newArray[j + 1]] = [newArray[j + 1], newArray[j]];
          setArray([...newArray]);
        }
        await sleep(Math.max(1, getDelay())); // Ensure minimum delay of 1ms
        bars[j].classList.remove('comparing');
        bars[j + 1].classList.remove('comparing-against');
      }
      const bars = document.getElementsByClassName('array-bar');
      bars[n - i - 1].classList.add('sorted');
    }
    setSorting(false);
  };

  const selectionSort = async () => {
    const n = array.length;
    let newArray = [...array];
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        highlightCodeLine(3);
        const bars = document.getElementsByClassName('array-bar');
        bars[j].classList.add('comparing');
        bars[minIndex].classList.add('comparing-against');
        updateIterationCount();
        if (newArray[j] < newArray[minIndex]) {
          highlightCodeLine(5);
          minIndex = j;
        }
        await sleep(getDelay());
        bars[j].classList.remove('comparing');
        bars[minIndex].classList.remove('comparing-against');
      }
      if (minIndex !== i) {
        [newArray[i], newArray[minIndex]] = [newArray[minIndex], newArray[i]];
        setArray([...newArray]);
      }
      const bars = document.getElementsByClassName('array-bar');
      bars[i].classList.add('sorted');
    }
    setSorting(false);
  };

  const insertionSort = async () => {
    const n = array.length;
    let newArray = [...array];
    for (let i = 1; i < n; i++) {
      let key = newArray[i];
      let j = i - 1;
      while (j >= 0 && newArray[j] > key) {
        highlightCodeLine(5);
        const bars = document.getElementsByClassName('array-bar');
        bars[j].classList.add('comparing');
        bars[j + 1].classList.add('comparing-against');
        updateIterationCount();
        newArray[j + 1] = newArray[j];
        setArray([...newArray]);
        await sleep(getDelay());
        bars[j].classList.remove('comparing');
        bars[j + 1].classList.remove('comparing-against');
        j--;
      }
      newArray[j + 1] = key;
      setArray([...newArray]);
      const bars = document.getElementsByClassName('array-bar');
      bars[i].classList.add('sorted');
    }
    setSorting(false);
  };

  const quickSort = async (arr, start = 0, end = arr.length - 1) => {
    if (start >= end) return;

    let pivotIndex = await partition(arr, start, end);
    await quickSort(arr, start, pivotIndex - 1);
    await quickSort(arr, pivotIndex + 1, end);

    setArray([...arr]);
    setSorting(false);
  };

  const partition = async (arr, start, end) => {
    const pivot = arr[end];
    let i = start - 1;

    for (let j = start; j < end; j++) {
      highlightCodeLine(5);
      const bars = document.getElementsByClassName('array-bar');
      bars[j].classList.add('comparing');
      bars[end].classList.add('comparing-against');
      updateIterationCount();
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setArray([...arr]);
      }
      await sleep(getDelay());
      bars[j].classList.remove('comparing');
      bars[end].classList.remove('comparing-against');
    }

    [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]];
    setArray([...arr]);
    return i + 1;
  };

  const mergeSort = async (arr, start = 0, end = arr.length - 1) => {
    if (start >= end) return;

    const mid = Math.floor((start + end) / 2);
    await mergeSort(arr, start, mid);
    await mergeSort(arr, mid + 1, end);
    await merge(arr, start, mid, end);

    setArray([...arr]);
    setSorting(false);
  };

  const merge = async (arr, start, mid, end) => {
    const leftArray = arr.slice(start, mid + 1);
    const rightArray = arr.slice(mid + 1, end + 1);
    let i = 0, j = 0, k = start;

    while (i < leftArray.length && j < rightArray.length) {
      highlightCodeLine(5);
      const bars = document.getElementsByClassName('array-bar');
      bars[k].classList.add('comparing');
      updateIterationCount();
      if (leftArray[i] <= rightArray[j]) {
        arr[k] = leftArray[i];
        i++;
      } else {
        arr[k] = rightArray[j];
        j++;
      }
      setArray([...arr]);
      await sleep(getDelay());
      bars[k].classList.remove('comparing');
      k++;
    }

    while (i < leftArray.length) {
      arr[k] = leftArray[i];
      i++;
      k++;
    }

    while (j < rightArray.length) {
      arr[k] = rightArray[j];
      j++;
      k++;
    }

    setArray([...arr]);
  };

  const startSort = async () => {
    setSorting(true);
    setIterationCount(0);
    switch (algorithm) {
      case 'bubble':
        await bubbleSort();
        break;
      case 'selection':
        await selectionSort();
        break;
      case 'insertion':
        await insertionSort();
        break;
      case 'quick':
        await quickSort(array);
        break;
      case 'merge':
        await mergeSort(array);
        break;
      default:
        break;
    }
    setSorting(false);
  };

  return (
    <div className="mb-10 sorting-visualizer">
      <div className="grid justify-center mb-5">
        <h1 className='my-5 text-3xl'>Sorting Algorithms Visualization</h1>
        <div className="p-5 bg-gray-600 rounded-md controls">
          <button onClick={generateArray} disabled={sorting} className='p-1 mr-4 bg-blue-600 rounded hover:bg-blue-800'>Generate New Array</button>
          <select className='text-black' value={algorithm} onChange={(e) => setAlgorithm(e.target.value)} disabled={sorting}>
            <option value="bubble">Bubble Sort</option>
            <option value="selection">Selection Sort</option>
            <option value="insertion">Insertion Sort</option>
            <option value="quick">Quick Sort</option>
            <option value="merge">Merge Sort</option>
          </select>
          <button onClick={startSort} disabled={sorting} className='p-1 bg-blue-600 rounded ms-4 hover:bg-blue-800'>Start Sorting</button>
        </div>
        <div className="speed-control">
          <label htmlFor="speedSlider">Speed:</label>
          <input
            type="range"
            id="speedSlider"
            min="1"
            max="100"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
          />
          <span>{speed}%</span>
        </div>
      </div>
      <div id="algorithmExplanation">{algorithmExplanations[algorithm]}</div>
      <div className="grid justify-center my-5 text-3xl font-bold">
        <div id="iterationCount">Iterations: {iterationCount}</div>
      </div>
      <div className="visualization-container">
        <div id="arrayContainer" ref={arrayContainerRef}>
          {array.map((value, index) => (
            <div
              key={index}
              className="array-bar"
              style={{ height: `${value * 3}px` }}
            ></div>
          ))}
        </div>
        <pre id="codeContainer"><code ref={codeContainerRef}></code></pre>
      </div>
    </div>
  );
};

export default SortingVisualizer;