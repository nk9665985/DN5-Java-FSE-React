interface Document{
    void open();
}

class PDFDocument implements Document{
    public void open(){
        System.out.println("Opening PDF Dcument");
    }
}

class WordDocument implements Document{
    public void open(){
        System.out.println("Opening WORD Documnet");
    }
}

class DocumentFactory{
    public static Document createDocument(String type){
        if(type.equalsIgnoreCase("PDF")){
            return new PDFDocument();
        }
        if(type.equalsIgnoreCase("WORD")){
            return new WordDocument();
        }

        return null;
    }
}
public class FactoryMethodPattern{
    public static void main(String[] args){
        Document d1 = DocumentFactory.createDocument("PDF");

        Document d2 = DocumentFactory.createDocument("WORD");

        d1.open();
        d2.open();
    }
}
