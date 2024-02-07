namespace Bids.Abstrations;

public class FileBytes
{
    public byte[] Bytes { get; set; }
    public string FileName { get; set; }
    
    public FileBytes(byte[] bytes, string fileName)
    {
        Bytes = bytes;
        FileName = fileName;
    }
}