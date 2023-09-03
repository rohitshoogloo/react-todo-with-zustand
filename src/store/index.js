import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useToDoStore = create(
  persist(
    (set, get) => ({
      toDoItems: [],
      removeSelectedToDo: (id) => {
        set((state) => ({
          toDoItems: state.toDoItems.filter((item) => item.id !== id)
        }));
      },
      addToDoItem: (item) =>
        set((state) => ({ toDoItems: [...state.toDoItems, item] })),
      removeAllToDo: () => useToDoStore.persist.clearStorage()
    }),
    {
      name: "todo-storage", // unique name
      storage: createJSONStorage(() => sessionStorage) // (optional) by default, 'localStorage' is used
    }
  )
);

export { useToDoStore };
