function selectionSort(items) {
var len = items.length,
 min;

for (var i=0; i < len; i++){
 
min = i;

for (j=i+1; j < len; j++){
if (items[j] < items[min]){
min = j;
}
}

if (i != min){
 swap(items, i, min);
}
 }

 return items;
  }
selectionSort([6,1,23,4,2,3]);