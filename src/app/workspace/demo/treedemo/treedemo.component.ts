import { Component, OnInit } from '@angular/core';
import { Message, MenuItem, TreeNode } from 'primeng/primeng';
import { Tree } from 'primeng/primeng';
import { CodeHighlighterModule } from 'primeng/primeng';
import { NodeService } from '../../../services/nodeservice';

@Component({
    selector: 'treedemo',
    templateUrl: './treedemo.component.html',
    styleUrls: ['./treedemo.component.css']
})
export class TreedemoComponent implements OnInit {

    msgs: Message[];

    filesTree1: TreeNode[];
    filesTree2: TreeNode[];
    filesTree3: TreeNode[];
    lazyFiles: TreeNode[];

    selectedFile: TreeNode;
    
    selectedFiles: TreeNode;

    constructor(private nodeService: NodeService) { }

    ngOnInit() {
        this.nodeService.getFiles().then(files => this.filesTree1 = files);
        this.nodeService.getFiles().then(files => this.filesTree2 = files);
        this.nodeService.getFiles().then(files => this.filesTree3 = files);
        this.nodeService.getLazyFiles().then(files => this.lazyFiles = files);
    }

    nodeSelect(event) {
        this.msgs = [];
        this.msgs.push({severity: '提示', summary: '已选结点', detail: event.node.label});
    }
    
    nodeUnselect(event) {
        this.msgs = [];
        this.msgs.push({severity: '提示', summary: '取消选择', detail: event.node.label});
    }
    
    unselectFile() {
        this.selectedFile = null;
    }

        nodeExpandMessage(event) {
        this.msgs = [];
        this.msgs.push({severity: '提示', summary: 'Node Expanded', detail: event.node.label});
    }
    
    nodeExpand(event) {
        if(event.node) {
            //in a real application, make a call to a remote url to load children of the current node and add the new nodes as children
            this.nodeService.getLazyFiles().then(nodes => event.node.children = nodes);
        }
    }
}
