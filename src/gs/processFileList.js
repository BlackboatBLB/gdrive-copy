/**
 * Loops through array of files.items,
 * Applies Drive function to each (i.e. copy),
 * Logs result,
 * Copies permissions if selected and if file is a Drive document,
 * Get current runtime and decide if processing needs to stop. 
 * 
 * @param {Array} items the list of files over which to iterate
 */
function processFileList(items, timeZone, permissions, userProperties, START_TIME, MAX_RUNNING_TIME) {
    while (items.length > 0 && !timeIsUp && !stop) {
        /*****************************
         * Get next file from passed file list.
         */
        item = items.pop();
        



        /*****************************
         * Copy each
         */
        newfile = copyFile(item);




        /*****************************
         * Log result
         */
        if (newfile.id) {
            log(ss, [
                "Copied",
                newfile.title,
                '=HYPERLINK("https://drive.google.com/open?id=' + newfile.id + '","'+ newfile.title + '")',
                newfile.id,
                Utilities.formatDate(new Date(), timeZone, "MM-dd-yy hh:mm:ss aaa")
            ]);
        } else { // newfile is error
            log(ss, [
                "Error, " + newfile,
                item.title,
                '=HYPERLINK("https://drive.google.com/open?id=' + item.id + '","'+ item.title + '")',
                item.id,
                Utilities.formatDate(new Date(), timeZone, "MM-dd-yy hh:mm:ss aaa")
            ]);
        }
        
        

        
        /*****************************
         * Copy permissions if selected, and if permissions exist to copy
         */
        if (permissions) {
            if (item.mimeType == "application/vnd.google-apps.document" ||
                item.mimeType == "application/vnd.google-apps.folder" ||
                item.mimeType == "application/vnd.google-apps.spreadsheet" ||
                item.mimeType == "application/vnd.google-apps.presentation" ||
                item.mimeType == "application/vnd.google-apps.drawing" ||
                item.mimeType == "application/vnd.google-apps.form" ||
                item.mimeType == "application/vnd.google-apps.script" ) {
                    copyPermissions(item.id, item.owners, newfile.id);
            }   
        }




        /*****************************
         * Get current runtime and decide if processing needs to stop
         */
        currTime = (new Date()).getTime();
        timeIsUp = (currTime - START_TIME >= MAX_RUNNING_TIME);
        stop = userProperties.getProperties().stop == 'true';
    }
}