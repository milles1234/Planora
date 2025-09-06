"use client"
import React, { useState } from "react";
import ProjectHeader from "@/app/projects/ProjectHeader"
import BoardView from "../BoardView";
import ListView from "../ListView";
import Table from "../TableView";
import ModalNewTask from "@/components/ModalNewTask";


type Props ={
    params: { id: string};
}

const Project = ({params} : Props) => {
    const { id } = params;
    const [activeTab, setActiveTab] = useState("Board");
    const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);
    return <div>
        <ModalNewTask isOpen={isModalNewTaskOpen} onClose={() => setIsModalNewTaskOpen(false)}/>
        <ProjectHeader activeTab = {activeTab} setActiveTab={setActiveTab} />
        {activeTab === 'Board' && (
            <BoardView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen}/>
        )}
        {activeTab === 'List' && (
            <ListView id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen}/>
        )}
          {activeTab === 'Table' && (
            <Table id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen}/>
        )}
      
    </div>
}
export default Project