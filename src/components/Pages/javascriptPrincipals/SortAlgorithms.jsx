import React from 'react';
import CodeBlock from '@subComponents/CodeBlock';
import SortingVisualizer from '@/components/Sub_Components/SortingVisualizer';

const SearchAndSortAlgorithms = () => {
	const linearSearchCode = `
function linearSearch(arr, target) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) {
			return i;
		}
	}
	return -1;
}`;

	const binarySearchCode = `
function binarySearch(arr, target) {
	let left = 0;
	let right = arr.length - 1;

	while (left <= right) {
		const mid = Math.floor((left + right) / 2);

		if (arr[mid] === target) {
			return mid;
		} else if (arr[mid] < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}

	return -1;
}`;

	const dfsCode = `
function dfs(graph, start) {
	const visited = new Set();
	const stack = [start];

	while (stack.length > 0) {
		const node = stack.pop();

		if (!visited.has(node)) {
			visited.add(node);
			console.log(node);

			const neighbors = graph[node];
			for (const neighbor of neighbors) {
				stack.push(neighbor);
			}
		}
	}
}`;

	const bubbleSortCode = `
function bubbleSort(arr) {
	let n = arr.length;
	let swapped;
	do {
		swapped = false;
		for (let i = 1; i < n; i++) {
			if (arr[i - 1] > arr[i]) {
				[arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
				swapped = true;
			}
		}
		n--;
	} while (swapped);
	return arr;
}`;

	const quickSortCode = `
function quickSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}

	const pivot = arr[arr.length - 1];
	const left = [];
	const right = [];

	for (const el of arr.slice(0, arr.length - 1)) {
		el < pivot ? left.push(el) : right.push(el);
	}

	return [...quickSort(left), pivot, ...quickSort(right)];
}`;

	return (
		<div className="container">
			<h1 className="my-12 mb-4 text-5xl font-bold text-center">Search and Sort Algorithms</h1>
            <hr className="mb-8" />
            <div className="grid justify-center">
                <SortingVisualizer />
            </div>

			<section className="mb-8">
				<h2 className="mb-2 text-xl font-semibold">Linear Search (Sequential Search)</h2>
				<p className="mb-2">Linear Search is the simplest search algorithm. It checks each element of the list until it finds the target value.</p>
				<p className="mb-2"><strong>When to use:</strong> Use Linear Search for small or unsorted lists.</p>
				<CodeBlock code={linearSearchCode} language="javascript" />
			</section>

			<section className="mb-8">
				<h2 className="mb-2 text-xl font-semibold">Binary Search (Logarithmic Search)</h2>
				<p className="mb-2">Binary Search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one.</p>
				<p className="mb-2"><strong>When to use:</strong> Use Binary Search for large, sorted lists.</p>
				<CodeBlock code={binarySearchCode} language="javascript" />
			</section>

			<section className="mb-8">
				<h2 className="mb-2 text-xl font-semibold">Depth-First Search (DFS)</h2>
				<p className="mb-2">Depth-First Search is an algorithm for traversing or searching tree or graph data structures. It starts at the root and explores as far as possible along each branch before backtracking.</p>
				<p className="mb-2"><strong>When to use:</strong> Use DFS for tree or graph structures when you need to explore all nodes and edges.</p>
				<CodeBlock code={dfsCode} language="javascript" />
			</section>

			<section className="mb-8">
				<h2 className="mb-2 text-xl font-semibold">Bubble Sort (Sinking Sort)</h2>
				<p className="mb-2">Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.</p>
				<p className="mb-2"><strong>When to use:</strong> Use Bubble Sort for small lists or when simplicity is more important than efficiency.</p>
				<CodeBlock code={bubbleSortCode} language="javascript" />
			</section>

			<section>
				<h2 className="mb-2 text-xl font-semibold">Quick Sort (Partition-Exchange Sort)</h2>
				<p className="mb-2">Quick Sort is an efficient, in-place sorting algorithm that in practice is faster than Merge Sort and Heap Sort. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.</p>
				<p className="mb-2"><strong>When to use:</strong> Use Quick Sort for large lists where average-case performance matters.</p>
				<CodeBlock code={quickSortCode} language="javascript" />
			</section>
		</div>
	);
};

export default SearchAndSortAlgorithms;