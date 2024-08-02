import React from "react";
import { Fragment } from "react";
import {
  MagnifyingGlassIcon,
  FolderIcon,
  DocumentIcon,
  TrashIcon
} from "@heroicons/react/20/solid";
// import { MagnifyingGlassIcon,
//   FolderIcon,
//   DocumentIcon,
//   TrashIcon } from "@heroicons/react/20/outline";
import { Bars3CenterLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";
const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  // More people...
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const data = [
  {
    level: 1,
    name: "Folder 1",
    type: "folder",
    children: [
      { name: "File 1", type: "file" },
      { name: "File 2", type: "file" },
      {
        name: "Subfolder 1",
        type: "folder",
        level: 2,
        children: [
          { name: "File 3", type: "file" },
          { name: "File 4", type: "file" },
        ],
      },
    ],
  },
  {
    name: "Folder 2",
    type: "folder",
    level: 1,
    children: [
      { name: "File 5", type: "file" },
      {
        name: "Subfolder 2",
        type: "folder",
        level: 2,
        children: [
          { name: "File 6", type: "file" },
          {
            name: "Subfolder 3",
            type: "folder",
            children: [
              { name: "File 7", type: "file" },
              { name: "File 8", type: "file" },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Folder 3",
    type: "folder",
    level: 1,
    children: [{ name: "File 9", type: "file" }],
  },
];

const Dialog = ({ isOpen, onClose, onSubmit, isFolder }) => {
  const [inputValue, setInputValue] = React.useState("");

  React.useEffect(() => {
    setInputValue(""); // Reset input value when dialog is opened
  }, [isOpen]);

  return isOpen ? (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4">
          {isFolder ? "Create Folder" : "Create File"}
        </h3>
        <input
          type="text"
          className="border border-gray-300 p-2 w-full mb-4"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={`Enter ${isFolder ? "folder" : "file"} name`}
        />
        <div className="flex justify-end">
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            onClick={() => {
              onSubmit(inputValue);
              onClose();
            }}
          >
            Submit
          </button>
          <button
            type="button"
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

const Folder = ({ folder }) => (
  <li>
    <details open>
      <summary className="flex items-center">
        <FolderIcon className="w-5 h-5 text-gray-600" /> {/* Set icon color */}
        <span className="ml-2">{folder.name}</span>
      </summary>
      <ul className="ml-4">
        {folder.children.map((item) =>
          item.type === "folder" ? (
            <Folder key={item.name} folder={item} />
          ) : (
            <File key={item.name} file={item} />
          )
        )}
      </ul>
    </details>
  </li>
);

const File = ({ file }) => (
  <li className="flex items-center">
    <DocumentIcon className="w-5 h-5 text-gray-600" /> {/* Set icon color */}
    <span className="ml-2">{file.name}</span>
  </li>
);

export default function Example() {
  const [selectedFolder, setSelectedFolder] = React.useState(null);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [newItemName, setNewItemName] = React.useState("");
  const [isFolder, setIsFolder] = React.useState(true);
  const [level, setLevel] = React.useState(0);

  const handleDialogSubmit = (name) => {
    // Handle the creation of a new folder or file
    if (isFolder) { 
      // Add folder
      const newFolder = { name, type: "folder", level: 1, children: [] };
      if (selectedFolder) {
        const updatedData = data.map((item) => {
          if (item.name === selectedFolder) {
            item.children.push(newFolder);
          }
          return item;
        });
        setDatax(
          updatedData.find((item) => item.name === selectedFolder).children
        );
      } else {
        setDatax([...data, newFolder]);
      }
    } else {
      // Add file
      const newFile = { name, type: "file" };
      if (selectedFolder) {
        const updatedData = data.map((item) => {
          if (item.name === selectedFolder) {
            item.children.push(newFile);
          }
          return item;
        });
        setDatax(
          updatedData.find((item) => item.name === selectedFolder).children
        );
      } else {
        setDatax([...data, newFile]);
      }
    }
  };


  let datax = data;
  if (selectedFolder) {
    datax = data.find((item) => item.name === selectedFolder).children;
  }
  return (
    <div className="flex h-screen border-black border-2 bg-white">
      {/* Left sidebar */}
      <div className="w-64 border-r border-gray-700">
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Folder Viewer</h2>
          <div className="flex items-center mb-4">
            <span className="mr-2">main</span>
          </div>
          {/* File tree structure */}
          <ul>
            {data.map((item) =>
              item.type === "folder" ? (
                <Folder key={item.name} folder={item} />
              ) : (
                <File key={item.name} file={item} />
              )
            )}
          </ul>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1">
        <div className="p-6">
          <Dialog
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            onSubmit={handleDialogSubmit}
            isFolder={isFolder}
          />
          <button
            onClick={() => {
              setIsFolder(true);
              setIsDialogOpen(true);
            }}
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            + Create Folder
          </button>
          <button
            onClick={() => {
              setIsFolder(false);
              setIsDialogOpen(true);
            }}
            type="button"
            class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Create File
          </button>

          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Edited By
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Role
                        </th>
                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                        >
                          <span className="sr-only"></span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {/* If Selected Folder, then create a empty folder with ".." */}
                      {selectedFolder && (
                        <tr key="..">
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 hover:text-blue-600 hover:underline">
                            <div className="flex items-center">
                              <FolderIcon className="w-5 h-5 text-gray-600" />
                              <span
                                className="ml-2"
                                onClick={() => setSelectedFolder(null)}
                              >
                                ..
                              </span>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <a
                              href="#"
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              Edit<span className="sr-only">, ..</span>
                            </a>
                          </td>
                        </tr>
                      )}
                      {datax.map((item) => (
                        <tr key={item.name}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 hover:text-blue-600 hover:underline">
                            <div className="flex items-center">
                              {item.type === "folder" ? (
                                <FolderIcon className="w-5 h-5 text-gray-600" />
                              ) : (
                                <DocumentIcon className="w-5 h-5 text-gray-600" />
                              )}
                              <span
                                className="ml-2"
                                onClick={() => {
                                  if (item.type === "folder") {
                                    setSelectedFolder(item.name);
                                  }
                                }}
                              >
                                {item.name}
                              </span>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {item.title}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {item.email}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {item.role}
                          </td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <a
                              href="#"
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              <TrashIcon className="w-5 h-5"/><span className="sr-only">, {item.name}</span>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
