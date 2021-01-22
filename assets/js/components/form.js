export function Form() {
    const
        form = document.createElement('form')

    form.innerHTML = `<form>        
                        <label for="amount" class="form-label">Number of questions</label>
                        <select id="amount" class="form-control">
                          <option value="5">5</option>
                          <option value="10">10</option>
                          <option value="15">15</option>
                          <option value="20">20</option>
                        </select>
                        <label for="categories" class="form-label">Categories</label>
                        <select name="" id="categories" class="form-control">
                          <option value="">Any Category</option>
                        </select>
                        <label for="difficulty" class="form-label">Difficulty</label>
                        <select name="" id="difficulty" class="form-control">
                          <option value="">Any Difficulty</option>
                          <option value="easy">Easy</option>
                          <option value="medium">Medium</option>
                          <option value="hard">Hard</option>
                        </select>
                        <label for="type" class="form-label">Type</label>
                        <select name="" id="type" class="form-control">
                          <option value="">Any Type</option>
                          <option value="multiple">Multiple</option>
                          <option value="boolean">Boolean</option>
                        </select>
                    </form>`
    return form
}