module.exports = {
    up: (QueryInterface) => {
        return QueryInterface.bulkInsert(
            'employees',
            [
                {
                    name: 'Daiane',
                    last_name: 'M P Silva',
                    position: 'Professora de Português',
                    date_birth: '1999-06-24 00:00:00+00',
                    salary: 5000,
                    description:
                        'Deverá efetuar todas as atividades propostas pelo cordenador.',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
                {
                    name: 'Maurilio',
                    last_name: 'J Silveira',
                    position: 'Desenvolvedor Full Stack Júnior',
                    date_birth: '1997-07-05 00:00:00+00',
                    salary: 2500,
                    description:
                        'Deverá efetuar todas as atividades propostas pelo cordenador.',
                    created_at: new Date(),
                    updated_at: new Date(),
                },
            ],
            {}
        );
    },

    down: () => {},
};
