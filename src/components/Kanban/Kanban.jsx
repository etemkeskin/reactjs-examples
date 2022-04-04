import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import mockKanbanData from "../../data/mockKanbanData";
import Card from "../UI/Modal/Card";
import classes from "./Kanban.module.css";

const Kanban = () => {
  const [data, setData] = useState(mockKanbanData);

  const onDragEnd = (result) => {
    if (!result.destination)  return
    const {source, destination} = result


    if (source.droppableId !== destination.droppableId ) {
      const sourceColIndex = data.findIndex(e => e.id === source.droppableId )
      const destinationColIndex = data.findIndex(e => e.id ===destination.droppableId);

      const sourceCol = data[sourceColIndex];
      const destinationCol = data[destinationColIndex]

      const sourceTask = [...sourceCol.tasks]
      const destinationTask = [...destinationCol.tasks]

      const [removed] = sourceTask.splice(source.index, 1)

      destinationTask.splice(destination.index,0, removed)

      data[sourceColIndex].tasks = sourceTask
      data[destinationColIndex].tasks = destinationTask
      setData(data);

    }
    console.log(result);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={classes.kanban}>
        {data.map((section) => (
          <Droppable key={section.id} droppableId={section.id}>
            {(provided) => (
              <div
                {...provided.droppableProps}
                className={classes.kanban__section}
                ref={provided.innerRef}
              >
                <div className={classes.kanban__section__title}>{section.title}</div>
                <div className="kanban__section__content">
                  {section.tasks.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div className={classes.kanban__task}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            ...provided.draggableProps.style,
                            opacity: snapshot.isDragging ? "0.5" : "1",
                          }}
                        >
                          <div>{task.title}</div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default Kanban;
