## NativeScript SFSPA (Single Frame Single Page Application)

Option 1

root component (&lt;&lt;page-router-outlet&gt;&gt;)
hub component (&lt;&lt;router-outlet&gt;&gt;)

root-routing.forRoot

    {
        path: '',
        component: <<hub>>Component,
        children: [
            {
                path: '',
                redirectTo: ‘feature-route’,
                pathMatch: 'full'
            },
            {
                path: ‘feature-route’,
                loadChildren: () =>
                    import('../features/<<feature>>.module').then(
                        module => module.<<Feature>>Module
                    )
            }
        ]
    }

feature-routing.forChild

Option 2

root component (&lt;&lt;page-router-outlet&gt;&gt;) -> hub module -> hub component (&lt;&lt;router-outlet&gt;&gt;)

root-routing.forRoot

    { path: '', redirectTo: 'hub-route‘, pathMatch: 'full' },
    {
        path: 'hub-route’,
        loadChildren: () =>
            import('../features/<<hub>>/<<hub>>.module').then(
                (module) => module.<<Hub>>Module
            ),
    }

&lt;&lt;hub&gt;&gt;-routing.forChild

    {
        path: '',
        component: <<hub>>Component,
        children: [
            {
                path: '',
                redirectTo: ‘feature-route’,
                pathMatch: 'full'
            },
            {
                path: ‘feature-route’,
                loadChildren: () =>
                    import('../features/<<feature>>.module').then(
                        module => module.<<Feature>>Module
                    )
            }
        ]
    }
