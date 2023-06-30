export default {
    name: 'Projects',
    title: 'Projects',
    type: 'object',
    fields: [
        { 
            name: 'projectname', 
            title: 'Name of the Business or Organization', 
            type: 'string'
        },
        { 
            name: 'projectlink', 
            title: 'Link to the Business or Organization Website', 
            type: 'string'
        },
        { 
            name: 'githublink', 
            title: 'Link to the Code', 
            type: 'string'
        },
        { 
            name: 'logo', 
            title: 'Mobile Logo for the Business', 
            type: 'image',
            options: {
                hotspot: true
            } 
        },
        { 
            name: 'desktopimage', 
            title: 'Desktop Image of the Website', 
            type: 'image',
            options: {
                hotspot: true
            } 
        },
        { 
            name: 'desktopalt', 
            title: 'Alt Phrase for Desktop View', 
            type: 'string'
        },
        { 
            name: 'tabletimage', 
            title: 'Tablet Image of the Website', 
            type: 'image',
            options: {
                hotspot: true
            } 
        },
        { 
            name: 'tabletalt', 
            title: 'Alt Phrase for Tablet View', 
            type: 'string'
        },
        { 
            name: 'mobileimage', 
            title: 'Mobile Image of the Website', 
            type: 'image',
            options: {
                hotspot: true
            } 
        },
        { 
            name: 'mobilealt', 
            title: 'Alt Phrase for Mobile View', 
            type: 'string'
        },
    ]
}