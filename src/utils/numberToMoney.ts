const numberToMoney = (number: number): string => {
    let final_return = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(number);

    return `${final_return}`;
};

export default numberToMoney;
