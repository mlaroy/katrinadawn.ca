import React from 'react'

const CategoriesFilter = ({ categories, activeTags, setActiveTags, createTagObject }) => {
    const { edges } = categories;

    const tags = edges.flatMap(edge => {
        return edge.node.tags;
    }).reduce((acc, curr) => {
        return acc.includes(curr) ? acc : [...acc, curr];
    }, [])
        .filter(tag => tag !== null)
        .map(tag => createTagObject(tag))

    console.log({ tags })


    const handleUpdateTags = (tagObj) => {
        // const tagObj = createTagObject(tag);
        // console.log('active tags: ', activeTags);
        if( !activeTags.some(activeTag => tagObj.slug === activeTag.slug)) {
            // setActiveTags(activeTags => newTags.filter(t => t !== tag));
            setActiveTags(activeTags => [...activeTags, tagObj]);
        } else {
            const newTags = [...activeTags];
            setActiveTags(activeTags => newTags.filter(t => t.slug !== tagObj.slug));
        }
    }

  return (
    <div>
        <p className="mb-2 text-sm">Filter posts:</p>
        <div className="flex mb-8 items-center flex-wrap gap-2">
            {tags.map(tag => {
                const buttonClass = activeTags.some(activeTag => tag.slug === activeTag.slug) ? 'btn btn-inverse' : 'btn btn-outline-inverse';
                return (
                    <button
                        key={tag.slug}
                        onClick={() => handleUpdateTags(tag)}
                        className={buttonClass + ` text-sm flex items-center capitalize`}>
                        {activeTags.some(activeTag => tag.slug === activeTag.slug) && <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>}
                        {tag.name}
                    </button>
                )
            })}
            {activeTags.length > 0 && <button onClick={() => setActiveTags([])} className="text-sm btn">Reset</button>}
        </div>
    </div>
  )
}

export default CategoriesFilter
