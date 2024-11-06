import React, { useEffect, useRef } from "react";
import Sidebar from "./sidebar/Sidebar";
import NoTabs from "./NoTabs";
import useTabContext from "../hooks/useTabContext";
import Drawer from "./sidebar/Drawer";
import { useToggle } from "../hooks/useToggle";

import { DocumentDuplicateIcon, ExclamationTriangleIcon, CodeBracketIcon, XCircleIcon } from "@heroicons/react/24/outline";
import Navbar from "./Navbar";
import DirectoryList from "./sidebar/DirectoryList";
import { directory } from "../utils/directory";
import JSConfetti from "js-confetti";
import { Terminal } from "./Terminal";


function Dashboard() {
  const tabs = useTabContext();
  const tabRef = useRef(null);
  const [drawerOpen, toggleDrawer] = useToggle(false);
  const [sidebarOpen, toggleSidebar] = useToggle(true);

  // Reset Tab Component scroll when tab changes
  useEffect(() => {
    if (tabRef.current) {
      tabRef.current.scrollTo({ top: 0, behaviour: "smooth" });
    }
  }, [tabs]);

  // Keyboard shortcut listeners
  useEffect(() => {
    const keyboardShortcuts = (e) => {
      if (e.key === "b" && e.metaKey) {
        window.innerWidth < 768 ? toggleDrawer() : toggleSidebar();
      }

      if (e.key === "k" && e.metaKey && e.shiftKey) {
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti({
          confettiColors: [
            "#8be9fd",
            "#50fa7b",
            "#ff5555",
            "#ff79c6",
            "#bd93f9",
            "#f1fa8c",
          ],
        });
      }
    };

    window.addEventListener("keydown", keyboardShortcuts);

    return window.addEventListener("keydown", keyboardShortcuts);
  }, [toggleSidebar, toggleDrawer]);

  return (
    <div className='font-sans min-h-screen h-full md:h-screen flex overflow-hidden'>
      {/* Desktop Sidebar */}
      <div className='md:block hidden bg-dark-500 border-r border-dark-400'>
        <button
          onClick={toggleSidebar}
          className='min-h-[50px] min-w-[50px] bg-dark-500 flex items-center px-3 outline-none group'
        >
          <DocumentDuplicateIcon className="text-white-50a w-6 h-6 group-focus:text-white-75a"/>
        </button>
        
      </div>
      {sidebarOpen && <div className='md:block hidden bg-dark-600'>
        <button
          onClick={toggleSidebar}
          className='min-h-[50px] min-w-[50px] bg-dark-600 flex items-center px-3 outline-none group'
        >
        </button>
        <Sidebar open={sidebarOpen}>
          <DirectoryList directory={directory} />
        </Sidebar>
      </div>}

      {/* Mobile drawer */}
      <Drawer isOpen={drawerOpen} toggle={toggleDrawer}>
        <DirectoryList directory={directory} callback={toggleDrawer} />
      </Drawer>

      {/* Main content, navbar, and new terminal */}
      <div className='flex-1 flex flex-col w-full overflow-hidden mt-[50px] md:mt-0'>
        <Navbar toggleDrawer={toggleDrawer} />

        {/* Editor Section */}
        <div className='flex-1 flex flex-col overflow-hidden'>
          {tabs.current ? (
            <div
              ref={tabRef}
              className='font-mono pt-[32px] pb-[16px] px-4 md:px-9 overflow-y-auto flex-1'
            >
              <div className='max-w-[1200px]'>
                {tabs.current.component}
              </div>
            </div>
          ) : (
            <NoTabs />
          )}

          <Terminal />

          {/* VSCode Bottom Bar */}
          <div className="h-6 bg-dark-600 border-t border-dark-400 flex items-center text-white-50a text-sm px-2">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M3 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3zm0 11.5V3h10v9.5H3z"/>
                </svg>
                <span>main</span>
              </div>
              <div className="flex items-center space-x-1">
                <span>0</span>
                <ExclamationTriangleIcon className="w-4 h-4" />
                <span>0</span>
                <XCircleIcon className="w-4 h-4" />
              </div>
            </div>
            <div className="flex-1"></div>
            <div className="flex items-center space-x-4">
              <span>Ln 1, Col 1</span>
              <span>UTF-8</span>
              <CodeBracketIcon className="w-4 h-4" />
              <span>JavaScript</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
