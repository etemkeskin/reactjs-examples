import { v4 as uuidv4 }  from 'uuid';

const mockKanbanData = [
    {
        id: uuidv4(),
        title: 'To do',
        tasks: [
            {
                id: uuidv4(),
                title: 'Learn javascript'
            },
            {
                id: uuidv4(),
                title: 'Learn python'
            },
            {
                id: uuidv4(),
                title: 'Learn git'
            }
        ]
    },
    {
        id: uuidv4(),
        title: 'In progress',
        tasks: [
            {
                id: uuidv4(),
                title: 'Learn Css'
            },
            {
                id: uuidv4(),
                title: 'Learn PHP'
            },
            {
                id: uuidv4(),
                title: 'Learn git'
            }
        ]
    },
    {
        id: uuidv4(),
        title: ' ✔️ Completed',
        tasks: [
            {
                id: uuidv4(),
                title: 'Learn HTML'
            }
        ]
    }

];

export default mockKanbanData;