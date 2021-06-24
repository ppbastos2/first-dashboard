var clientes = document.getElementById('chartClientes').getContext('2d');
var chart = new Chart(clientes,{
    type:'line',
    data: {
        labels:['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets:[{
            label:'Clientes',
            backgroudColor:'fff',
            borderColor:'4f48ec',
            data:[19, 25, 41, 11, 69, 33]
        }]
    }
});

var receitas = document.getElementById('chartReceitas').getContext('2d');
var chart = new Chart(receitas,{
    type:'bar',
    data: {
        labels:['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets:[{
            label:'Vendas 2020',
            backgroudColor:'fff',
            borderColor:'4f48ec',
            data:[315, 80, 132, 261, 189, 61, 99, 443, 284, 113, 96, 786]
        }]
    }
});

var produtos = document.getElementById('chartProdutos').getContext('2d');
var chart = new Chart(produtos,{
    type:'bar',
    data: {
        labels:['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets:[{
            label:'Produtos Lançados',
            backgroudColor:'fff',
            borderColor:'4f48ec',
            data:[8, 2, 13, 9, 5, 11]
        }]
    }
});

var faturamento = document.getElementById('chartFaturamentos').getContext('2d');
var chart = new Chart(faturamento,{
    type:'line',
    data: {
        labels:['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets:[{
            label:'Produtos Lançados',
            backgroudColor:'fff',
            borderColor:'4f48ec',
            data:[1249, 2901, 894, 359, 1934, 537]
        }]
    }
});