
export const postModule = {
    state: () => ({
        posts: [
            { id: 1, title: "Название1", body: "Описание 1" },
            { id: 2, title: "Название2", body: "Описание 2" },
            { id: 3, title: "Название3", body: "Описание 3" },
        ],
        title: "",
        body: "",
        dialogVisible: false,
        selectedSort: " ",
        sortOptions: [
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" },
        ],
        searchQuery: "",
        page: 1,
        limit: 10,
        totalPages: 0,
    }),
    getters: {
        sortedPosts(state) {
            return [state.posts].sort((post1, post2) => {
                return post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]);
            });
        },
        sortedAndSearchedPosts(state, getters) {
            return getters.sortedPosts.value.filter((post) => {
                return post.title.includes(state.searchQuery);
            }); 
        }
    },
    mutation: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setPage(state, page) {
            state.page = page;
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort;
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages;
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery;
        }

    },
    actions: {
        async fetchPosts({state, commit}) {
            try {
              const resp = await axios.get("https://jsonplaceholder.typicode.com/posts", {
                params: {
                  _page: state.page,
                  _limit: state.limit,
                },
              });
              commit('setTotalPages', Math.ceil(resp.headers["x-total-count"] / state.limit));
              commit('setPosts', resp.data);
            } catch (error) {
              console.log(error);
            }
          }
    }
}