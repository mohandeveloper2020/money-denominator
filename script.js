const denominations = [500, 200, 100, 50, 20, 10, 5, 2, 1];

const calculateAmount = (value, denomination) => {
    document.getElementById('result' + denomination).textContent = denomination * value;

    let total = 0;
    denominations.forEach(denomination => {
        total += parseInt(document.getElementById('result' + denomination).textContent);
    });
    document.getElementById('total').textContent = '₹ ' + total;
}

const resetValues = () => {
    // Reset all input fields
    const inputs = document.querySelectorAll('.row input[type="number"]');
    inputs.forEach(input => {
        input.value = '';
    });

    // Reset all result values to 0
    denominations.forEach(denomination => {
        document.getElementById('result' + denomination).textContent = '0';
    });

    // Reset total
    document.getElementById('total').textContent = '₹ 0';
}