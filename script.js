const denominations = [500, 200, 100, 50, 20, 10, 5, 2, 1];

const calculateAmount = (value, denomination) => {
    document.getElementById('result' + denomination).textContent = denomination * value;

    let total = 0;
    denominations.forEach(denomination => {
        total += parseInt(document.getElementById('result' + denomination).textContent);
    });
    document.getElementById('total').textContent = '₹ ' + total;
}