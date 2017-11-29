<?php

//class dedicated to access database and execute queries
class dbConnection{
    public $con;
    
    private function createConnection(){
        $this->con = mysqli_connect("localhost", "root", "","capitalHardware") or
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
    }

    //common routine for insert queries
    function executeNonQuery($query){
        
        //create connection if not
        if (!isset($this->con))
            $this->createConnection();
        
        //execut query
        if($this->con->query($query) === TRUE)
            return true;
        else 
            return false;
    }
    
    //common routine for selecting a single record from database
    function executeSelectSingleRecordQuery($query, $columnName){
        
        $con = $this->getcon();
        
        $result = $con->query($query);
    }
    
    //check whether the table has this id 
    //all capital hardware database tables have the id column
    function checkTableHasThisId($id, $tableName){
        
        $con = $this->getcon();
        if ($result = mysqli_query($con, "SELECT * FROM $tableName WHERE id=$id")){
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
        $result     = $con->query("SELECT COUNT(*) as TOTALFOUND from $tableName");
        $row_array  = $result->fetch_array(MYSQLI_ASSOC);
        return $row_array['TOTALFOUND']; 
    }
    
}
//
//$c = new dbConnection();
//echo $c->countTableRecord('customer');