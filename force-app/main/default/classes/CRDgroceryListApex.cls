public class CRDgroceryListApex {
    
    @auraEnabled
    public static List<Grocery_List__c> getGroceryList(){
        List<Grocery_List__c> gl = ([SELECT Id, Name FROM Grocery_List__c]);
        
        return gl;
    }
 //   
   // public class showRelatedGList{
     //   
       // @auraEnabled
        //public static list<Grocery_Item__c> getRelatedList();
  //      
    //    List<Grocery_Item__c> relatedList = new List<Grocery_Item__c>;
     //   
      //  relatedList=([Select Id.Grocery_Item__c, Name.Grocery_List__c from Notebook__c where Grocery_List__c = ])
 //   }

}