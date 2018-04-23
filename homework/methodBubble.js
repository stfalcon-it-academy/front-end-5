var data = [1, 2, 7, 10, 6, 9, 3, 8, 5, 4];

var bubble = function (data) {

    alert("Потрібно відсортувати масив: " + data);

    for (var y = 0; y < data.length; y++) {
        for (var x = 0; x < data.length; x++) {
            var sort;
            if (data[x] > data[x + 1]) {
                sort = data[x];
                data[x] = data[x + 1];
                data[x + 1] = sort;
            }

        }

    }
    return alert("Відсортували масив методом бульбашки: " + data);
};

bubble(data);