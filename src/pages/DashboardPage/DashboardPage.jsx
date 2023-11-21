import React from 'react'
import { useEffect,useState } from 'react';    
import { useSelector,useDispatch, shallowEqual } from "react-redux"
import { Route, Routes, useNavigate } from "react-router-dom"
import Navbar from '../../components/DashboardComponent/Navbar/Navbar';
import SubBar from '../../components/DashboardComponent/SubBar/SubBar';
import HomeComponent from '../../components/DashboardComponent/HomeComponent/HomeComponent';
import CreateFolder from '../../components/DashboardComponent/CreateFolder/CreateFolder'
import { getFiles, getFolders } from '../../redux/actionCreators/fileFolderActionCreator';
import FolderComponent from '../../components/DashboardComponent/FolderComponent/FolderComponent';
import CreateFile from '../../components/CreateFile/CreateFile';
import UploadFile from '../../components/DashboardComponent/UploadFile/UploadFile';
import './DashboardPage.css'


    function DashboardPage() {

      const [isCreateFolderModalOpen, setIsCreateFolderModalOpen] = useState(false);
      const [isCreateFileModalOpen, setIsCreateFileModalOpen] = useState(false);
      const [isFileUploadModalOpen, setIsFileUploadModelOpen] = useState(false);

      const { isLoggedIn, isLoading, userId } = useSelector(
        (state) => ({
          isLoggedIn: state.auth.isAuthenticated,
          isLoading: state.filefolders.isLoading,
          userId: state.auth.user.uid,
        }),
        shallowEqual
      );


      const navigate = useNavigate();
      const dispatch = useDispatch()

      useEffect(()=>{
        if (!isLoggedIn) {
          navigate("/")
        }
      }, []);

      // video 9 not change time 14:48 17:06 effect homecomponent
      useEffect(() => {
        if(isLoading && userId) {
          dispatch(getFolders(userId));
          dispatch(getFiles(userId));
        }
      },[isLoading, userId, dispatch]);

      return (
        <>
        {isCreateFolderModalOpen && (
          <CreateFolder setIsCreateFolderModalOpen={setIsCreateFolderModalOpen}/>
        )}
        {isCreateFileModalOpen && (
          <CreateFile setIsCreateFileModelOpen={setIsCreateFileModalOpen}/>
        )}
        {isFileUploadModalOpen && (
          <UploadFile setIsFileUploadModelOpen={setIsFileUploadModelOpen}/>
        )}
        
        <div className="dashboard-page">
        <Navbar/>
        <div className="sub">
        <SubBar
        setIsCreateFolderModelOpen={setIsCreateFolderModalOpen}
        setIsCreateFileModelOpen={setIsCreateFileModalOpen}
        setIsFileUploadModalOpen={setIsFileUploadModelOpen}
        />
        </div>
        
        <div className="dashboard-img">
        <div className="clint clintb"></div>
          <div className="clint clinta">
          <video width="320" height="240" autoPlay>
  <source src="https://firebasestorage.googleapis.com/v0/b/project-93474.appspot.com/o/pexels_videos_2235745%20(720p).mp4?alt=media&token=876ffae5-63f0-4f87-a04f-5f18f182058c" type="video/mp4"></source>
</video>

          </div>
          <div className="clint clintc"></div>
        </div>
        </div>
        
        {/* <Routes>
          <Route path="" element={<HomeComponent/>}/> 
          <Route path='folder/:folderId' element={<FolderComponent/>}/>
        </Routes> */}
        </>
      )
    }
    
    export default DashboardPage;
    
