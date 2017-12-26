<?php

//class dedicated to access database and execute queries
class dbConnection{
    public $con;
    
    private function createConnection(){
        $this->con = mysqli_connect("localhost", "root", "rootpassword","capitalHardware") or //mysqli_connect("localhost", "root", "rootpassword","capitalHardware")
                die("Server Error : " . mysql_error());
    }


    // Get the database connection
    function getcon() {
        
        //create the database connection
        if (!isset($this->con))
            $this->createConnection();
       
        return $this->con;
    }

    // Close Database Connection
    function close() {
        if (isset($this->con))
            mysqli_close($this->con);
        
        unset($this->con);
    }

    //common routine for insert queries
    function executeNonQuery($query){
        
        //create connection if not
        $con = $this->getcon();
        
        //execut query
        if($con->query($query) === TRUE)
            return true;
        else 
            return false;
    }
    
    //common routin for non parameter select query, return result set
    function executeSelectQuery($query){
        
        return mysqli_query($this->getcon(), $query);        
    }
    
    //common routine for selecting a single record from database
    function executeSelectSingleRecordQuery($query, $columnName){
        
        $con        = $this->getcon();
        $result     = $con->query($query);
        $row_array  = $result->fetch_array(MYSQLI_ASSOC);
        return $row_array[$columnName];
    }
    
    //check whether the table has this id 
    //all capital hardware database tables have the id column
    function checkTableHasThisId($id, $tableName){
        
        $con = $this->getcon();
        if ($result = mysqli_query($con, "SELECT * FROM $tableName WHERE id='$id'")){
            // Return the number of rows in result set
            $rowcount=mysqli_num_rows($result);
            // Free result set
            mysqli_free_result($result);
            
            return $rowcount > 0;
        }
        
        return false;
    }
    
    //count the table records
    function countTableRecord($tableName){
        
        $con        = $this->getcon();
        $result     = $con->query("SELECT COUNT(*) as TOTALFOUND from `$tableName`");
        $row_array  = $result->fetch_array(MYSQLI_ASSOC);
        return $row_array['TOTALFOUND']; 
    }
    
    function getTableNextUniqueId($table, $prefix){
        
        //create unique id (nth number of the table)
        $noOfRecords = $this->countTableRecord($table);
        $uniqueId = $prefix.(++$noOfRecords);

        //increse unique id by 1 if already exists
        while($this->checkTableHasThisId($uniqueId, $table))
            $uniqueId = $prefix.($noOfRecords++);
        
        return $uniqueId;
    }
}
//unit test
//$c = new dbConnection();
//echo $c->countTableRecord('customer');