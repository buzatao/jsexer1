window.onload = function(){


    let produtos = [
        {descricao:'Mamão Papaia', preco:1.00},
        {descricao:'Laranja', preco:2.00},
        {descricao:'Manga', preco:4.00},
        {descricao:'Melão', preco:1.20},
        {descricao:'Melancia', preco: 2.00},
    ]
    //produtos lista de produtos
    //cestaDoCliente cesta cliente
    //mostraTotalCompra
    const listaProdutos = document.querySelector("#produtos");
    const cestaCliente = document.querySelector("#cestaDoCliente");
    const listaTotal = document.querySelector("#mostraTotalCompra");

        //exibir lista 
        (()=>{
            for( let prod of produtos){
                const filho = document.createElement('li');

                for (listaP in prod){
                    if( listaP == 'preco'){
                        listaProdutos.appendChild(filho).setAttribute('data-preco', prod[listaP] )
                    } else {
                        listaProdutos.appendChild(filho).textContent = `${prod[listaP]}`;
                    }

                }
            }
        })(produtos)
    

        listaProdutos.addEventListener('click', function(elemento){
            
            let lis = document.createElement('li');
            lis.appendChild(document.createTextNode(elemento.target.textContent));
            document.getElementById("cestaDoCliente").appendChild(lis);

            let valorTotal = calcular(adicionaCestaNumaLista());

            document.getElementById("mostraTotalCompra").value = valorTotal;
                      
        })
        
        function adicionaCestaNumaLista(){
            let arrayCesta= []
            var lis = document.getElementById("cestaDoCliente").getElementsByTagName('li');

            for (let i = 0; i < lis.length; i++){
                arrayCesta.push(produtos.find(produto => produto.descricao == lis[i].textContent));
            }
            return arrayCesta
        }

        function calcular(arrayCesta){
            let total=0 
            
            for(let i = 0; i < arrayCesta.length; i++){
                total += arrayCesta[i].preco
            }
            console.log(total);
            return total
        }

    }