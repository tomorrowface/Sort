
function swap(i, j, arr) {
	var tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
}

function bubble_sort (arr, len) {
	let count = 0;

	for (var P=len-1; P>=0; P--) {
		flag = 0;
		for (var i=0; i<P; i++) {
			if (arr[i] > arr[i+1]) {
				swap(i, i+1, arr);
				count++;
				flag = 1;
			}
		}
	}
	console.log('冒泡排序后A为：' + arr + ' 经过了' + count + '次交换');
}

var A = [34, 8, 64, 51, 32, 21];

bubble_sort(A, A.length);