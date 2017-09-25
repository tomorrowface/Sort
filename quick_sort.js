function quickSort (arr, left, right) {
	var mid,
	    pivot;

	if (left < right) {
		pivot = right;
		mid = sort(arr, pivot, left, right);

		quickSort(arr, left, mid - 1);
		quickSort(arr, mid + 1, right);
	}

	return arr;
}

function sort (arr, pivot, left, right) {
	var pivotValue = arr[pivot],
	    mid = left;

	for (var i=left; i<right; i++) {
		if (arr[i] < pivotValue) {
			swap(arr, i, mid);
			mid++;
		}
	}

	swap(arr, mid, pivot);

	return mid;
}

function swap(arr, i, j) {
	var tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
}

quickSort([11,8,14,3,6,2,1, 7],0,7);
