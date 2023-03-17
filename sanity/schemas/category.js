export default {
    name: 'categories',
    type: 'document',
    title: 'Kategorier',
    fields: [
        {
            name: 'category_title',
            type: 'string',
            title: 'Kategorinavn'
        },
        {
            name: 'category_image',
            type: 'image',
            title: 'Bilde'
        }
    ]

}

// document is a content type that is visbile in sanity