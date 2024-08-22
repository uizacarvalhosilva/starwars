const LIST = [
    {
        id: 1,
        name: 'Mestre Yoda',
        avatar: 'images/yoda.png'
    },
    {
        id: 2,
        name: 'Luke Skywalker',
        avatar: 'images/luke.png'
    },
    {
        id: 3,
        name: 'Princesa Leia',
        avatar: 'images/leia.png'
    },
    {
        id: 4,
        name: 'Han Solo',
        avatar: 'images/hansolo.png'
    },
    {
        id: 5,
        name: 'Darth Vader',
        avatar: 'images/vader.png'
    },
    {
        id: 6,
        name: 'Chewbacca',
        avatar: 'images/chewbacca.png'
    },
    {
        id: 7,
        name: 'R2D2',
        avatar: 'images/r2d2.png'
    },
    {
        id: 8,
        name: 'C3PO',
        avatar: 'images/c3po.png'
    },
]

const App = new Vue({
    //representa o elemento principal da aplicação
    el: '#app',
    //representa os dados armazenados e que podemos exibir na página
    data: {
        title: 'STAR WARS LEGO',
        userName: 'Uíza Silva',
        characters: LIST,
        searchName: ''
    },
    //recurso do vue js para implementar funções
    methods:{
        like(userName){
            alert(`O Personagem ${userName} recebeu seu joinha :)`);
        },
        remove(id){
            const list = this.characters;
            const result = list.filter(item => {
                return item.id != id;
            });

            this.characters = result;
        },
        search() {
            if(this.searchName === '' ){
                return alert('O campo de busca é obrigatório!');
            }

            //sempre atualizar a lista principal para exibir a pesquisa 
            const list = this.characters = LIST;
        
            const result = list.filter(item => {
                // converter tanto o nome do item quanto o termo de busca para minúsculas para melhorar as buscas
                return item.name.toLowerCase().includes(this.searchName.toLowerCase());
            });

            if (result.length <= 0){
                alert('Nenhum registro encontrado');
            }else {
                this.characters = result;
            }
        }
    }
});

