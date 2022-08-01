import React from 'react'

const CategoriesFilter = ({ categories, activeTags, setActiveTags }) => {
    const { edges } = categories

    const tags = edges.flatMap(edge => {
        return edge.node.tags;
    }).reduce((acc, curr) => {
        return acc.includes(curr) ? acc : [...acc, curr];
    }, []).filter(tag => tag !== null);
    console.log({ tags })


    const handleUpdateTags = (tag) => {
        if( !activeTags.includes(tag)) {
            // setActiveTags(activeTags => newTags.filter(t => t !== tag));
            setActiveTags(activeTags => [...activeTags, tag]);
        } else {
            const newTags = [...activeTags];
            setActiveTags(activeTags => newTags.filter(t => t !== tag));
        }
        console.log(tag);
    }

  return (
    <div className="flex mb-8">
        {tags.map(tag => {
            const buttonClass = activeTags.includes(tag) ? 'btn btn-inverse' : 'btn btn-outline-inverse';
            return (
                <button
                    key={tag}
                    onClick={() => handleUpdateTags(tag)}
                    className={buttonClass + ` text-sm`}>
                    {tag}
                </button>
            )
        })}
    </div>
  )
}

export default CategoriesFilter
