
function swap(i, j, arr) {
	var tmp = arr[i];
	arr[i] = arr[j];
	arr[j] = tmp;
}


function insert_sort (arr, len) {
	let count = 0;

	for (var P=1; P<len; P++) {
		var tmp = arr[P];
		for (var i=P; i>0; i--) {
			if (arr[i-1] > tmp) {
				swap(i-1, i, arr);
				count++;
			} else {
				arr[i] = tmp;
				break;
			}
		}
	}
	console.log('插入排序后A为：' + arr + ' 经过了' + count + '次交换');
}

var A = [34, 8, 64, 51, 32, 21];

insert_sort(A, A.length);