# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.15

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list


# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /home/kabiraj/.local/share/JetBrains/Toolbox/apps/CLion/ch-0/193.6494.38/bin/cmake/linux/bin/cmake

# The command to remove a file.
RM = /home/kabiraj/.local/share/JetBrains/Toolbox/apps/CLion/ch-0/193.6494.38/bin/cmake/linux/bin/cmake -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /home/kabiraj/workspace/codechef/xor-linked-list

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /home/kabiraj/workspace/codechef/xor-linked-list/cmake-build-debug

# Include any dependencies generated for this target.
include CMakeFiles/xor_linked_list.dir/depend.make

# Include the progress variables for this target.
include CMakeFiles/xor_linked_list.dir/progress.make

# Include the compile flags for this target's objects.
include CMakeFiles/xor_linked_list.dir/flags.make

CMakeFiles/xor_linked_list.dir/main.cpp.o: CMakeFiles/xor_linked_list.dir/flags.make
CMakeFiles/xor_linked_list.dir/main.cpp.o: ../main.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/kabiraj/workspace/codechef/xor-linked-list/cmake-build-debug/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object CMakeFiles/xor_linked_list.dir/main.cpp.o"
	/usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/xor_linked_list.dir/main.cpp.o -c /home/kabiraj/workspace/codechef/xor-linked-list/main.cpp

CMakeFiles/xor_linked_list.dir/main.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/xor_linked_list.dir/main.cpp.i"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/kabiraj/workspace/codechef/xor-linked-list/main.cpp > CMakeFiles/xor_linked_list.dir/main.cpp.i

CMakeFiles/xor_linked_list.dir/main.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/xor_linked_list.dir/main.cpp.s"
	/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/kabiraj/workspace/codechef/xor-linked-list/main.cpp -o CMakeFiles/xor_linked_list.dir/main.cpp.s

# Object files for target xor_linked_list
xor_linked_list_OBJECTS = \
"CMakeFiles/xor_linked_list.dir/main.cpp.o"

# External object files for target xor_linked_list
xor_linked_list_EXTERNAL_OBJECTS =

xor_linked_list: CMakeFiles/xor_linked_list.dir/main.cpp.o
xor_linked_list: CMakeFiles/xor_linked_list.dir/build.make
xor_linked_list: CMakeFiles/xor_linked_list.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/home/kabiraj/workspace/codechef/xor-linked-list/cmake-build-debug/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Linking CXX executable xor_linked_list"
	$(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/xor_linked_list.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
CMakeFiles/xor_linked_list.dir/build: xor_linked_list

.PHONY : CMakeFiles/xor_linked_list.dir/build

CMakeFiles/xor_linked_list.dir/clean:
	$(CMAKE_COMMAND) -P CMakeFiles/xor_linked_list.dir/cmake_clean.cmake
.PHONY : CMakeFiles/xor_linked_list.dir/clean

CMakeFiles/xor_linked_list.dir/depend:
	cd /home/kabiraj/workspace/codechef/xor-linked-list/cmake-build-debug && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/kabiraj/workspace/codechef/xor-linked-list /home/kabiraj/workspace/codechef/xor-linked-list /home/kabiraj/workspace/codechef/xor-linked-list/cmake-build-debug /home/kabiraj/workspace/codechef/xor-linked-list/cmake-build-debug /home/kabiraj/workspace/codechef/xor-linked-list/cmake-build-debug/CMakeFiles/xor_linked_list.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : CMakeFiles/xor_linked_list.dir/depend
