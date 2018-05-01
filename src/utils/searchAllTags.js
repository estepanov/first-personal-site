const searchAllTags = (arr, target) => {
  return arr.filter(project => {
    let show = false
    project.breakdown.forEach(group => {
      group.value.forEach(tag => {
        if (tag.toLowerCase().trim() === target.toLowerCase().trim())
          show = true
      })
    })
    return show
  })
}

export default searchAllTags
