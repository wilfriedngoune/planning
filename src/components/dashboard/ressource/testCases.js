    //Conteneur de l'ensemble qui contiendra la liste des batiments et salles.
    //Les salles
    let salleType = [
        {
            'nom' : 'Salle simple',
            'salles' : [
                {
                    'nom' : 'R110',
                    'etat_electricite' : 'Oui',
                    'capacite_cours' : 100,
                    'batiment' : 'Bloc pedagogique',
                },
    
                {
                    'nom' : 'SOO6',
                    'etat_electricite' : 'Oui',
                    'capacite_cours' : 100,
                    'batiment' : 'Departement Informatique',
                },
                {
                    'nom' : 'S008',
                    'etat_electricite' : 'Oui',
                    'capacite_cours' : 100,
                    'batiment' : 'Departement Informatique',
                },
            ]
        },

        {
            'nom' : 'Amphitheatre',
            'salles' : [
                {
                    'nom' : 'A350',
                    'etat_electricite' : 'Non',
                    'capacite_cours' : 350,
                    'batiment' : 'Face decanat',
                },
    
                {
                    'nom' : 'A3',
                    'etat_electricite' : 'Oui',
                    'capacite_cours' : 300,
                    'batiment' : 'Face scolarite',
                },
                {
                    'nom' : 'A1001',
                    'etat_electricite' : 'Oui',
                    'capacite_cours' : 1000,
                    'batiment' : 'Marche 1001',
                },
            ]
        }
    ]

        // //Conteneur de l'ensemble qui contiendra la liste des batiments et salles.
    
    let salleBatiment = [
        {
            'nom' : 'Bloc pedagogique',
            'salles' : [
                {
                    'nom' : 'R110',
                    'etat_electricite' : 'Oui',
                    'capacite_cours' : 100,
                    'type' : 'Salle simple',
                },
    
                {
                    'nom' : 'R107',
                    'etat_electricite' : 'Oui',
                    'capacite_cours' : 100,
                    'type' : 'Salle simple',
                },
    
                {
                    'nom' : 'S001',
                    'etat_electricite' : 'Oui',
                    'capacite_cours' : 110,
                    'type' : 'Salle simple',
                },
                {
                    'nom' : 'R110',
                    'etat_electricite' : 'Oui',
                    'capacite_cours' : 100,
                    'type' : 'Salle simple',
                },
            ],
            "update_at" : '12122'
        },

        {
            'nom' : 'Departement informatique',
            'salles' : [
                {
                    'nom' : 'S006',
                    'etat_electricite' : 'Oui',
                    'capacite_cours' : 120,
                    'type' : 'Salle simple',
                },
    
                {
                    'nom' : 'S008',
                    'etat_electricite' : 'Non',
                    'capacite_cours' : 100,
                    'type' : 'Salle simple',
                },
    
                {
                    'nom' : 'S007',
                    'etat_electricite' : 'Non',
                    'capacite_cours' : 110,
                    'type' : 'Salle simple',
                },
            ],
            "update_at" : '12122'
        },
        {
            'nom' : 'Marche 1001',
            'salles' : [
                {
                    'nom' : 'A1001',
                    'etat_electricite' : 'Oui',
                    'capacite_cours' : 1000,
                    'type' : 'Amphitheatre',
                },
    
                {
                    'nom' : 'A1002',
                    'etat_electricite' : 'Non',
                    'capacite_cours' : 1000,
                    'type' : 'Amphitheatre',
                },
            ],
            "update_at" : '12122'
        },
        {
            'nom' : 'Face scolarite',
            'salles' : [
                {
                    'nom' : 'A3',
                    'etat_electricite' : 'Oui',
                    'capacite_cours' : 300,
                    'type' : 'Amphitheatre',
                },
            ],
            "update_at" : '12122'
        },

    ]
