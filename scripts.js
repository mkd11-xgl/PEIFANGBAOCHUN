function calculateFormula() {
    // 获取所有原材料的用量
    let totalAmount = 0;
    let amounts = [];
    let materialCount = 15;

    for (let i = 1; i <= materialCount; i++) {
        let amount = document.querySelector(`input[name="amount${i}"]`).value;
        if (amount) {
            amounts.push(parseFloat(amount));
            totalAmount += parseFloat(amount);
        }
    }

    // 获取总重量
    let totalWeight = document.getElementById("totalWeight").value;

    if (!totalWeight || totalAmount === 0) {
        alert("请确保输入了所有原材料的用量和总重量！");
        return;
    }

    // 计算百分比并填入相应的格子
    for (let i = 1; i <= materialCount; i++) {
        let amount = document.querySelector(`input[name="amount${i}"]`).value;
        if (amount) {
            let percent = ((parseFloat(amount) / totalAmount) * 100).toFixed(2);
            document.querySelector(`input[name="percent${i}"]`).value = percent;
        }
    }

    // 根据公斤数计算大货需要投放的原材料数量
    let resultHTML = "<ul>";
    amounts.forEach((amount, index) => {
        let materialWeight = ((amount / totalAmount) * totalWeight).toFixed(2);
        resultHTML += `<li>原材料${index + 1}: ${materialWeight} kg</li>`;
    });
    resultHTML += "</ul>";

    document.getElementById("result").innerHTML = resultHTML;
}
