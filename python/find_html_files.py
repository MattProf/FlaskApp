import os


def search_files(base_path="./templates", ends_with=".html"):
    """
    @base_path = "./templates"
    @ends_with = ".html"
    """
    directory = os.path.abspath(base_path)
    html_files = []
    for subdir, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(ends_with):
                file_path = os.path.join(subdir, file)
                relative_path = os.path.relpath(file_path, directory)
                relative_path = relative_path.replace("\\", "/")
                html_files.append(relative_path)
    return html_files
